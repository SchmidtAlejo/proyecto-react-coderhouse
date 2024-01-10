import ItemSale from "./ItemSale";

export default function ItemsSaleContainer() {
    return (
        <div className="container home__sale my-4">
            <div className="row gy-3">
                <div className="col-12 col-md-6">
                    <ItemSale
                        name={"Camisas"}
                        image={"https://images.unsplash.com/photo-1605547781680-606148f1008c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />
                </div>
                <div className=" col-12 col-md-6">
                    <ItemSale
                        name={"Pantalones"}
                        image={"https://images.unsplash.com/photo-1624378442362-d3247e8126ec?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />
                </div>
            </div>
            <div className="row mt-0 gy-3">
                <div className="col-12 col-md-4">
                    <ItemSale
                        name={"Zapatillas"}
                        image={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />                    
                </div>
                <div className=" col-12 col-md-4">
                    <ItemSale
                        name={"Remeras"}
                        image={"https://images.unsplash.com/photo-1567098260939-5d9cee055592?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />                    
                </div>
                <div className=" col-12 col-md-4">
                    <ItemSale
                        name={"Accesorios"}
                        image={"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />                    
                </div>
            </div>
        </div>
    );
}