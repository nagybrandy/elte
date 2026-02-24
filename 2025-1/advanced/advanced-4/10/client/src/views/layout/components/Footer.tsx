
const Footer = () => {
  return (
    <footer className="border-t z-10">
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <p className="text-sm text-muted-foreground">
            Your premier destination for the latest movies and screenings.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Movies</li>
            <li>Screenings</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: info@cinema.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Movie Street</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        © 2024 Cinema. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
