import { Request, Response } from "express";

export const calculatePrice = async (req: Request, res: Response): Promise<void> => {
    try {
        const { weight, grade } = req.body;

        if (!weight || !grade) {
            res.status(400).json({ message: "Weight and grade are required" });
            return;
        }

        const basePrices: Record<string, { min: number; max: number }> = {
            "Alba": { min: 8500, max: 10000 },
            "Continental": { min: 5400, max: 8000 },
            "Mexican": { min: 4000, max: 6000 },
            "Hamburg": { min: 3000, max: 5000 },
        };

        if (!basePrices[grade]) {
            res.status(400).json({ message: "Invalid grade" });
            return;
        }

        const { min, max } = basePrices[grade];

        // Correct formatting function
        const formatPrice = (price: number) => `Rs. ${price.toLocaleString("en-US")}`;

        //Ensure output is formatted correctly
        const priceRange = `${formatPrice(min * weight)} - ${formatPrice(max * weight)}`;

        res.status(200).json({ priceRange }); // Now it will display correctly
    } catch (error) {
        res.status(500).json({ message: "Server error", error: (error as Error).message });
    }
};
