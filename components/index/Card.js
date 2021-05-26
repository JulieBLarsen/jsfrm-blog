import Link from 'next/link';

function Card(props) {
  const formattedDate = new Date(props.date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return (
    <div
      key={props.id}
      className="bg-white flex flex-col justify-between sm:w-96  px-6 py-4 m-4 shadow-lg text-left">
      <div>
        <h2 className="mb-1">{props.title.rendered}</h2>
        <p className="text-indigo-600 mb-4 font-semibold">{formattedDate}</p>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
      </div>
      <Link href={`detail/${props.slug}`}>
        <a className="text-right pr-2 text-indigo-600 hover:text-indigo-500">
          Read more
        </a>
      </Link>
    </div>
  );
}

export default Card;
