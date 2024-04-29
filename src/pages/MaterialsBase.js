import "../style/my-article.scss";

function MaterialsBase() {
  return (
    <div className="page">
      <div className="my-article-page">
        <h1>Lista materiałów</h1>
        <div className="my-article-table">
          <div className="my-article-header">
            <div className="my-article-cell">Nazwa materiału </div>
            <div className="my-article-cell">Plik graficzny</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MaterialsBase;
