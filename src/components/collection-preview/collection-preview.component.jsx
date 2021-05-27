import "./collection-preview.styles.css";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        // This is a performance issue as these anonymous functions will have to run every time CollectionPreview
        // component has to re-render especially if the collections array gets bigger in size
        items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;
