<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/notnavindu/kotaa-v2">
    <img src="static/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Kotaa</h3>

  <p align="center">
    Self-hostable, Personal URL Shortner That Lives on The Edge
    <br />
    <br />
    <a href="https://github.com/notnavindu/kotaa-v2">View Demo</a>
    ·
    <a href="https://github.com/notnavindu/kotaa-v2/issues">Report Bug</a>
    ·
    <a href="https://github.com/notnavindu/kotaa-v2/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Examples](#examples)
- [Getting Started](#getting-started)
  - [Vercel Deploy](#vercel-deploy)
  - [Manual Installation](#manual-installation)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

Kotaa is a simple, personal, self-hostable URL shortner that can be deployed to the Vercel Edge network.
TODO:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- SvelteKit
- Redis (Upstash)
- Supabase (For authentication)
- Vercel Edge Network

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Examples

- [link.navindu.me/instagram](https://link.navindu.me/instagram)
- [link.navindu.me/twitter](https://link.navindu.me/twitter)
- [link.navindu.me/nud3s](https://link.navindu.me/nud3s)

<!-- GETTING STARTED -->

## Getting Started

### Vercel Deploy

TODO: Vercel deploy button

### Manual Installation

1. Fork & Clone
2. Run `npm install`
3. Copy `.env.example` and rename it to `.env`
4. Copy the upstash environment variables
5. [supabase](https://supabase.com/) setup
   1. Create an account or login to your [supabase](https://supabase.com/) account
   2. Add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` values into the `.env` file. (You can get these values from supabase)
6. [upstash](https://upstash.com/) setup
   1. Create a new project on upstash and you can find the env variables required for `upstash` from the upstash dashboard.
   2. Copy those over to your local `.env` file
7. Push and deploy the project to vercel. (Remember to add your environment variables!)
8. Add a custom domain to your vercel project (like `link.navindu.me`) and you're good to go!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the TODO: License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Feel free to contact me via `hello@navindu.me` or through my twitter [link.navindu.me/twitter](https://link.naivndu.me/twitter)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/notnavindu/kotaa.svg?style=for-the-badge
[contributors-url]: https://github.com/notnavindu/kotaa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/notnavindu/kotaa.svg?style=for-the-badge
[forks-url]: https://github.com/notnavindu/kotaa/network/members
[stars-shield]: https://img.shields.io/github/stars/notnavindu/kotaa.svg?style=for-the-badge
[stars-url]: https://github.com/notnavindu/kotaa/stargazers
[issues-shield]: https://img.shields.io/github/issues/notnavindu/kotaa.svg?style=for-the-badge
[issues-url]: https://github.com/notnavindu/kotaa/issues
[license-shield]: https://img.shields.io/github/license/notnavindu/kotaa.svg?style=for-the-badge
[license-url]: https://github.com/notnavindu/kotaa/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: static/ss.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
