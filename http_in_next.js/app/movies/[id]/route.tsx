import { movies } from "../db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movie = movies.find((m) => m.id === +id);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Found some error" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(movie));
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movid = +id;
  const movie = movies.find((m) => m.id === movid);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie not found.." }), {
      status: 404,
    });
  }
  try {
    const updateMovie = await req.json();

    const index = movies.findIndex((m) => m.id === movid);
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }
    movies[index] = { ...movie, ...updateMovie };
    return new Response(JSON.stringify(movies[index]), { status: 202 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
      status: 400,
    });
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieid = +id;
  const index = movies.findIndex((m) => m.id === movieid);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Found some error" }), {
      status: 404,
    });
  }
  movies.splice(index, 1);
  return new Response(
    JSON.stringify({ message: "Movie delete successfully.." }),
    { status: 200 }
  );
}
