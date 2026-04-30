import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { products } from './data';
const PORT = Number(process.env.PORT ?? 3001);
const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-secret-change-me';
const app = Fastify({ logger: true });
await app.register(cors, {
    origin: true,
});
await app.register(jwt, {
    secret: JWT_SECRET,
});
const users = [{ email: 'demo@demo.hu', password: 'demo' }];
const authenticate = async (req, reply) => {
    try {
        await req.jwtVerify();
    }
    catch {
        return reply.code(401).send({ message: 'Unauthorized' });
    }
};
app.get('/health', async () => ({ ok: true }));
app.post('/auth/login', async (req, reply) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
    if (!user || user.password !== password) {
        return reply.code(401).send({ message: 'Bad credentials' });
    }
    const token = app.jwt.sign({ sub: email });
    return { token, user: { email } };
});
app.post('/auth/register', async (req, reply) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return reply.code(400).send({ message: 'Email and password required' });
    }
    const exists = users.some((u) => u.email === email);
    if (exists)
        return reply.code(409).send({ message: 'Email already exists' });
    users.push({ email, password });
    const token = app.jwt.sign({ sub: email });
    return { token, user: { email } };
});
app.get('/me', { preHandler: authenticate }, async (req) => {
    return { user: { email: req.user?.sub } };
});
app.get('/products', async () => ({
    items: products,
}));
app.get('/products/:id', async (req, reply) => {
    const product = products.find((p) => p.id === req.params.id);
    if (!product)
        return reply.code(404).send({ message: 'Not found' });
    return product;
});
app.post('/products', { preHandler: authenticate }, async (req) => {
    const id = req.body.id ?? `p${products.length + 1}`;
    const product = {
        id,
        name: req.body.name,
        priceHuf: req.body.priceHuf,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        origin: req.body.origin,
        preparation: req.body.preparation,
    };
    products.unshift(product);
    return product;
});
app.put('/products/:id', { preHandler: authenticate }, async (req, reply) => {
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx < 0)
        return reply.code(404).send({ message: 'Not found' });
    const prev = products[idx];
    const next = {
        ...prev,
        ...req.body,
        id: prev.id,
    };
    products[idx] = next;
    return next;
});
app.delete('/products/:id', { preHandler: authenticate }, async (req, reply) => {
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx < 0)
        return reply.code(404).send({ message: 'Not found' });
    const [removed] = products.splice(idx, 1);
    return reply.code(200).send({ ok: true, removed });
});
await app.listen({ port: PORT, host: '0.0.0.0' });
