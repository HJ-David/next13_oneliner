import Oneliner from "@models/oneliner";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const oneliners = await Oneliner.find({}).populate("creator");

        return new Response(JSON.stringify(oneliners), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all oneliners", { status: 500 });
    }
} 