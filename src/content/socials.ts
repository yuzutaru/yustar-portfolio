import { SocialLinkSchema } from "@/domain/schemas";

export const socials = [
  SocialLinkSchema.parse({
    platform: "linkedin",
    label: "LinkedIn",
    handle: "in/yustar-pramudana",
    url: "https://www.linkedin.com/in/yustar-pramudana/",
  }),
  SocialLinkSchema.parse({
    platform: "github",
    label: "GitHub",
    handle: "@yuzutaru",
    url: "https://github.com/yuzutaru",
  }),
  SocialLinkSchema.parse({
    platform: "gitlab",
    label: "GitLab",
    handle: "@yuzutaru",
    url: "https://gitlab.com/yuzutaru",
  }),
  SocialLinkSchema.parse({
    platform: "medium",
    label: "Medium",
    handle: "@yuzutaru",
    url: "https://medium.com/@yuzutaru",
  }),
];
