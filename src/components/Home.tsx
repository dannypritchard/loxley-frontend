import { useState, useEffect } from 'react';
import axios from 'axios';
import loxley from '../assets/cat.jpg';

export default function Home() {
    const [post, setPost] = useState(null);

    const baseURL = `${import.meta.env.VITE_API_URL}/`;

    useEffect(() => {
        axios.get(baseURL).then((response: any) => {
            setPost(response.data);
        });
    }, []);

    if (!post) {
        return null;
    }
    return (
        <>
            <p>Data from rust api: {(post as any).hello}</p>

            <img src={loxley} alt="" className="w-500" />
        </>
    );
}
