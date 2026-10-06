export default function Pipeline() {
  let arr = [
    ["New lead", "Priya Menon", "GM", "new"],
    ["Interested", "Rakesh Kumar", "GM", "interest"],
    ["Site visit", "Kunal Shah", "AH", "visit"],
    ["Negotiation", "Ananya Rao", "GM", "neg"],
    ["Booked", "R. Srinivas", "AH", "book"],
  ];
  return (
    <div className="pipeline">
      {arr.map((x) => (
        <div className="pipe-col" key={x[0]}>
          <p>
            {x[0]} <span>2</span>
          </p>
          <div className={"lead-card " + x[3]}>
            <i>{x[2]}</i>
            <b>{x[1]}</b>
            <small>Green Valley · Plot 51</small>
            <em>Today</em>
          </div>
        </div>
      ))}
    </div>
  );
}
