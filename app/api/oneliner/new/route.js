import Oneliner from "@models/oneliner";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, oneliner, tag } = await request.json();

    try {
        await connectToDB();
        const newOneliner = new Oneliner({ creator: userId, oneliner, tag });

        await newOneliner.save();
        return new Response(JSON.stringify(newOneliner), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new oneliner", { status: 500 });
    }
}
