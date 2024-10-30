import { Router } from "express";
import db from "../database/db";

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID
 *                       name:
 *                         type: string
 *                         description: The name of the product
 *                       price:
 *                         type: number
 *                         description: The price of the product
 *                       img:
 *                         type: string
 *                         description: Image URL for the product
 *                       category:
 *                   category: string
 *                   description: Category of the product
 *       500:
 *         description: Server error
 */
router.get("/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
});

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     description: Retrieve details of a specific product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A single product's details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The product ID
 *                     name:
 *                       type: string
 *                       description: The name of the product
 *                     price:
 *                       type: number
 *                       description: The price of the product
 *                     image:
 *                       type: string
 *                       description: Image URL for the product
 *                     category:
 *                        type: string
 *                        description: Category of the product
 *       500:
 *         description: Server error
 */
router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  db.get(`SELECT * FROM products WHERE id = ?`, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: row });
  });
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     description: Create a new product with name, price, and image URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *                 example: Sample Product
 *               price:
 *                 type: number
 *                 description: Price of the product
 *                 example: 19.99
 *               img:
 *                 type: string
 *                 description: Image URL of the product
 *                 example: http://example.com/image.png
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the created product
 *                 name:
 *                   type: string
 *                   description: Name of the product
 *                 price:
 *                   type: number
 *                   description: Price of the product
 *                 img:
 *                   type: string
 *                   description: Image URL of the product
 *                 category:
 *                   type: string
 *                   description: Category of the product
 *       500:
 *         description: Server error
 */
router.post("/products", (req, res) => {
  const { name, price, img, category } = req.body;
  db.run("INSERT INTO products (name, price, img,category) VALUES (?, ?, ?,?)", [name, price, img, category], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name, price, img, category });
  });
});
/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add a new cart item
 *     description: Create a new cart item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: number
 *                 description: id of the product
 *                 example: 1
 *
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the created product
 *                 product_id:
 *                   type: number
 *                   description: id of the product
 *
 *
 *       500:
 *         description: Server error
 */
router.post("/cart", (req, res) => {
  const { product_id } = req.body;
  db.run("INSERT INTO cart (product_id) VALUES ( ?)", [product_id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, product_id });
  });
});

export default router;
