import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}
export async function POST(req: Request) {
  const movie = await req.json();
  const newMovie = { ...movie };
  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
}
