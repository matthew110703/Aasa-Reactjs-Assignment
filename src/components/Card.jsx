const Card = ({ icon, text }) => {
  return (
    <article className="shadow-sapphire flex items-center gap-4 rounded-lg p-2 shadow">
      <img src={icon} alt="icon" width={32} height={32} />
      <p className="font-semibold">{text}</p>
    </article>
  );
};

export default Card;
