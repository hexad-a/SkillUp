import { prisma } from "@/app/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function createAccount(formData: FormData) {
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const existingUser = await prisma.user.findUnique({
        where: { email:email },
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                email, 
                password: hashedPassword,
            },
        });
    }catch(error){
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }

    redirect('/signin');
}