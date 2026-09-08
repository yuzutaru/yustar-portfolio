import { ArticleSchema } from "@/domain/schemas";

export const articles = [
  ArticleSchema.parse({
    title: "Android UI in 2026: what engineers should really understand",
    platform: "Medium",
    date: "2026-01",
    url: "https://medium.com/@yuzutaru/android-ui-in-2026-what-engineers-should-really-understand-4adcdb3029dc",
  }),
  ArticleSchema.parse({
    title:
      "Kotlin Coroutines vs RxJava: What Android Developers Should Really Choose in 2026",
    platform: "Medium",
    date: "2026-01",
    url: "https://medium.com/@yustar.shooter/kotlin-coroutines-vs-rxjava-what-android-developers-should-really-choose-in-2026-3b671be29b06",
  }),
];
