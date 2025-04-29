import mongoose from "mongoose";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newProduct = new Product({
        name: product.name,
        image: product.image,
        price: product.price,
    });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    if (!product.name || !product.price) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}


