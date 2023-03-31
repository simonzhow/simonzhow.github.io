---
title: 2021 Predictions
publish_date: 2023-05-29
---

Note: This post was originally published in May, 2021.

# Introduction

In this post, I plan to outline a few tailwinds in cloud-native infrastructure that have been exciting to watch. My time at McKinsey has show that some of these trends have become [increasingly relevant](https://www.microsoft.com/en-us/microsoft-365/blog/2020/04/30/2-years-digital-transformation-2-months/) as companies begin to pick themselves back up from the COVID-19 pandemic and define their specific set of tools to enable them to compete in this new digital environment. Meanwhile, new cloud-native companies formed during the pandemic are actively leveraging the current set of tools available in the software and IT infrastructure markets in order to scale faster than ever before.

For incumbents and disrupters alike, the question still remains of how to create an IT organization with the proper people, processes, and tools that will lead to increased **productivity**, **agility**, and **innovation**. Today, companies are pushed to think more critically about how they can accurately measure each of these areas within engineering teams across their organization.

The need to double down on these three areas serves as the catalyst for the changes that are currently happening within the software and IT infrastructure markets. Below, I have listed a few theses based on my observations of various engineering teams in the past year.

# Theses

## App development teams will assume more responsibility for IT infrastructure provisioning and management

The adoption of DevSecOps over recent years has broken down silos between app development and IT operations teams. As a result of the movement to “shift security left”, IT infrastructure provisioning and management was forced to shift left as well. Trends such as [Infrastructure as Code](https://www.hashicorp.com/resources/what-is-infrastructure-as-code) and [Serverless](https://www.serverless.com/blog/definitive-guide-terraform-serverless) have caused engineering organizations to rethink how app developers and IT engineers should interact in order to drive up development velocity without compromising security.

Companies such as [Pulumi](https://www.pulumi.com/) and [env0](https://www.env0.com/) have posited that the implication of a shift-left approach in IT infrastructure is the expansion of the responsibility of the conventional app developer. This means that app developers will have more control over IT infrastructure provisioning and management, with the goal of achieving [managed developer self-service](https://thenewstack.io/the-next-step-after-devops-and-gitops-is-cloud-engineering-pulumi-says/).

## Everything in IT infrastructure that can be expressed “as code”, will be

In 2021, there is no argument against the assertion that Infrastructure as Code (IaC) is the de facto standard for IT infrastructure provisioning and management. The immutable, idempotent, and declarative nature of IaC has created new opportunities to codify other workflows within an IT organization, primarily around security, policy, compliance, and cost estimation.

Companies such as [Styra](https://www.styra.com/) (Open Policy Agent), Pulumi (CrossGuard), env0, and [Infracost](https://www.infracost.io/) are expanding the boundaries of what is typically contained in GitOps pipelines and aiding IT operations teams to establish workflows that are well-documented and well-governed through code.

## Software engineers will adopt no-code and low-code tools in key areas of the software development lifecycle

Recently, I have been fascinated by developer productivity after reading Nnamdi Iregbulem’s *[The Developer Productivity Manifesto](https://whoisnnamdi.com/the-developer-productivity-flywheel/).* He states that “new developer productivity tools make software developers more productive”, with the disclaimer that only choosing the right tooling will lead to this outcome. Reading this, along with Stripe’s *[The Developer Coefficient](https://stripe.com/files/reports/the-developer-coefficient.pdf)*, prompted me to revisit the age-old software development lifecycle (SDLC) and begin forming my own hypotheses of what changes might occur around this cycle in the coming years. Here are a few working assumptions that helped me structure my thoughts:

1. Code is a liability. Keep it to a minimum.
2. Time-wasting tasks still plague a substantial portion of software engineers
3. Developers (including myself) hate being forced to learn new programming languages

The summation of these three assumptions fuel my optimism towards the role that no-code and low-code tools will play in revitalizing key parts of the SDLC.

Companies such as [Nimbella](https://nimbella.com/), [Reflect](https://reflect.run/), [Atomized](https://www.atomizedhq.com/), and [Porter](https://www.getporter.dev/) solve for specific segments of the SDLC where developer productivity is being hit the most. As we continue to uncover more areas that are bottlenecking developer operations in this cycle, I imagine that we will see much more innovation in the developer no-code and low-code spaces.

---

Always looking to chat. Reach me at simon@unusual.vc.
