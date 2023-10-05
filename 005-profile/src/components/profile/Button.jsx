
export default function Button({ title, url, onClick }) {

  return (
    <a className="blue-button" href={url} title={title} target="_blank" onClick={ onClick } on>
      {title}
    </a>
  );
}
