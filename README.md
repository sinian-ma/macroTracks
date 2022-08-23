<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="./public/homepage-ss.png"></img>

MacroTracks allows users to calculate their daily macronutrients target based on their user profile and fitness goals. Users can input consumed foods to see total number of macronutrients consumed so far in a day.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<ul>
 <li> <a href="https://reactjs.org/">React.js</a></li>
 <li> <a href="https://expressjs.com/">Express</a></li>
 <li> <a href="https://nodejs.org/en/">Node.js</a></li>
 <li> <a href="https://www.mongodb.com/">MongoDB</a></li>
 <li> <a href="https://jestjs.io/">Jest</a></li>

</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install
  ```

### Installation

1. Get a free API Key at [https://rapidapi.com](https://rapidapi.com/msilverman/api/nutritionix-nutrition-database/).
2. Get a free MongoDB URI at [https://www.mongodb.com/](https://www.mongodb.com/).
3. Clone the repo
   ```sh
   git clone https://github.com/ian-ma-nyc/macroTracks.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create `.env` in the root directory and enter your API key and Database URI

   ```js
   const NUTRITIONIX_API_KEY = 'ENTER YOUR API';
   const MONGO_KEY = 'ENTER YOUR MONGODB URI';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Adding and saving food inputs in database
- [x] Display data for total macronutrient count
- [ ] Graphs for macronutrient data
- [ ] Autocomplete dropdown for database query
- [ ] Signup/login for user profile
- [ ] Macronutrient calculator based on user profile and fitness goals

<!-- See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sinian Ma - [LinkedIn](https://www.linkedin.com/in/sinian-ma/) - sinma1995@gmail.com

MacroTracks: [https://github.com/ian-ma-nyc/macroTracks](https://github.com/ian-ma-nyc/macroTracks)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
