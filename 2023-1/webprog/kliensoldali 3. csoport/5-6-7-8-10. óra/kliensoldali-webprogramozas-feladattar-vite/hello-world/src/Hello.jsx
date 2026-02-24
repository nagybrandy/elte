//import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const Hello  = ({name, count}) => {
  console.log(count)
  return <>
          {
          [...new Array(parseInt(count))]
          .map((e,i) => 
          <h1 key={i} className="cim" > {
          name === "" 
          ? "Nincs kit üdvözölni" 
          : `Hello ${name}`}!</h1>)}
          <p>Örülünk, hogy itt vagy az oldalon</p>
        </>
}
/* eslint-enable react/prop-types */
//Hello.propTypes = {name : PropTypes.string, count: PropTypes.string}

/*Hello.defaultProps = {
  name: 'Stranger',
  count: '1'
};*/
export default Hello
