import { z } from "zod";

export const SocialPlatformSchema = z.enum(["linkedin", "github", "gitlab", "medium"]);
export type SocialPlatform = z.infer<typeof SocialPlatformSchema>;

export const SocialLinkSchema = z.object({
  platform: SocialPlatformSchema,
  label: z.string(),
  handle: z.string(),
  url: z.url(),
});
export type SocialLink = z.infer<typeof SocialLinkSchema>;

export const ProfileSchema = z.object({
  name: z.string(),
  firstName: z.string(),
  title: z.string(),
  positioning: z.string(),
  location: z.string(),
  availability: z.string(),
  avatar: z.string(),
  heroAvatar: z.string(),
  resumeUrl: z.url(),
  areaFocus: z.array(z.string()),
  about: z.array(z.string()),
  keywords: z.array(z.string()),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const EmploymentTypeSchema = z.enum([
  "Full-time",
  "Contract",
  "Individual Contractor",
  "Bootcamp",
]);
export type EmploymentType = z.infer<typeof EmploymentTypeSchema>;

export const RoleSchema = z.object({
  company: z.string(),
  role: z.string(),
  employmentType: EmploymentTypeSchema,
  start: z.string(),
  end: z.string(),
  location: z.string(),
  workModel: z.enum(["Remote", "Hybrid", "On-site"]),
  client: z.string().optional(),
  summary: z.string(),
  bullets: z.array(z.string()),
  skills: z.array(z.string()),
});
export type Role = z.infer<typeof RoleSchema>;

export const SkillGroupSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});
export type SkillGroup = z.infer<typeof SkillGroupSchema>;

export const SuccessStorySchema = z.object({
  title: z.string(),
  problem: z.string(),
  action: z.array(z.string()),
  result: z.string(),
  tags: z.array(z.string()),
});
export type SuccessStory = z.infer<typeof SuccessStorySchema>;

export const ProjectSchema = z.object({
  name: z.string(),
  summary: z.string(),
  detail: z.string().optional(),
  tech: z.array(z.string()),
  url: z.url().optional(),
  featured: z.boolean(),
  private: z.boolean(),
  owner: z.enum(["personal", "client"]),
});
export type Project = z.infer<typeof ProjectSchema>;

export const ArticleSchema = z.object({
  title: z.string(),
  platform: z.string(),
  date: z.string(),
  url: z.url(),
});
export type Article = z.infer<typeof ArticleSchema>;

export const SiteSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  url: z.url(),
});
export type Site = z.infer<typeof SiteSchema>;
