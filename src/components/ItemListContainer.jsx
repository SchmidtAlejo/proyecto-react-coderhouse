export default function ItemListContainer({ greeting }) {
    return (
        <div className="container">
            <div className="alert alert-warning" role="alert">
                <h4>Atención ⚠</h4>
                {greeting}
            </div>
        </div>
    )
}
