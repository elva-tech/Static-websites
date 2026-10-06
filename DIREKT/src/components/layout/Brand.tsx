import mark from "../../assets/elva-mark.svg";

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Direkt home">
      <img src={mark} alt="Official ELVA logo" />
      <span>DIREKT</span>
    </a>
  );
}
