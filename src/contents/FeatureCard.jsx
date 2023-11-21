function FeatureCard({ imgURL, cat, date, title }) {
  return (
    <div>
      <div className="image">
        <img src={imgURL} alt={title} />
      </div>
      <div className="info mt-2 opacity-80 text-slate-700 text-sm font-normal  leading-relaxed">
        <span>
          {cat} - {date}
        </span>
      </div>

      <h4 className="text-indigo-950 text-xl font-bold  leading-7">{title}</h4>
    </div>
  );
}

export default FeatureCard;
