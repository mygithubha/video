const BASE = process.env.MOVIE_DB_URL || "https://api.themoviedb.org/3";
const KEY = process.env.MOVIE_DB_API_KEY;
export type Media = { id:number; title?:string; name?:string; overview?:string; poster_path:string|null; backdrop_path?:string|null; vote_average?:number; release_date?:string; first_air_date?:string; media_type?:"movie"|"tv" };
export function image(path:string|null|undefined,size="w500"){return path?`https://image.tmdb.org/t/p/${size}${path}`:"";}
export async function tmdb<T>(path:string):Promise<T|null>{
 if(!KEY) return null;
 try { const r=await fetch(`${BASE}${path}${path.includes("?")?"&":"?"}api_key=${KEY}&language=zh-CN`,{next:{revalidate:3600}}); if(!r.ok) return null; return await r.json() as T; } catch { return null; }
}
