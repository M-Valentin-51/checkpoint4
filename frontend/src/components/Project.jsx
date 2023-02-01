import logo from "../assets/header.jpeg";

export default function Project() {
  return (
    <section className="cardProjet">
      <div>
        <h2>Titre du projet</h2>
        <a href="/">Lien vers le dépot github</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus
          dolorum ullam earum illo eligendi aliquam doloribus repellendus at qui
          quasi dolores pariatur reiciendis architecto, fugit ipsa sapiente!
          Porro, fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione odio saepe delectus earum temporibus quam adipisci alias,
          eveniet ipsam debitis excepturi aliquam, ullam eum qui. Nisi illum
          corporis sit ratione?
        </p>
        <ul>
          <li>
            <span>#</span>Techno
          </li>
          <li>
            <span>#</span>Techno
          </li>
          <li>
            <span>#</span>Techno
          </li>
          <li>
            <span>#</span>Techno
          </li>
        </ul>
      </div>
      <img src={logo} alt="" />
    </section>
  );
}
