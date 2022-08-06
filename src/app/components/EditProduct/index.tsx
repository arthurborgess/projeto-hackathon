import { CreateProductModal } from "../CreateProduct";

import { CreateProductContext } from "../../contexts/Products/CreateProductProvider ";
import { useContext } from "react";


export default function EditProduc () {


    const context = useContext(CreateProductContext)
    

    return (
        <CreateProductModal
        isOpen

        />
    )
}