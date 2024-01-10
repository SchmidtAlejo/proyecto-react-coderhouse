export default function CartWidget() {
    return (
        <>
            <p>Carrito</p>
            <div>
                <i className="bi bi-cart"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">1</span>
            </div>
        </>
    )
}
