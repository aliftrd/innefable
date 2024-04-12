import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);

export function fetchHome() {
  return client.from('home').select('*').single();
}

export function fetchAbout() {
  return client.from('about').select('*').single();
}

export function fetchEducations() {
  return client.from('educations').select('*, achievements:education_achievements(*)')
}

export function fetchWorkExperiences() {
  return client.from('work_experiences').select('*, jobs:job_desks(*)');
}

export function fetchKeywords() {
  return client.from('keywords').select('*').eq('status', 'published');
}

export async function getFileUrl(path: string) {
  const { data } = await client.storage.from('innefable').getPublicUrl(path);

  return data.publicUrl;
}
