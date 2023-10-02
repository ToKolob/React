
export default function Button({ title, url }) {

  return (
    <a className="blue-button" href={url} title={title} target="_blank">
      {title}
    </a>
  );
}
