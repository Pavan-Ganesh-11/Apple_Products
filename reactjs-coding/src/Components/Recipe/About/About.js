import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const About = () => {
  return (
    <>
    <Header />
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-card-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
          className="user-img"
        />
        <h1 className="user-name">Hi, I'm Pavan Ganesh</h1>
        <h1 className="greeting">Glad to see you!</h1>
        <p className="about-desc">
          A recipe is a formula of ingredients and a list of instructions for
          creating prepared foods. It is used to control quality, quantity, and
          food costs in a foodservice operation. A recipe may be simple to
          complex based on the requirements of the operation and the intended
          user. For example, an experienced chef may need a recipe with only a
          few details, while a beginner cook may need more information about
          ingredients, preparation steps, cooking times and temperatures, visual
          cues, and equipment requirements.
          </p>
          <p className="about-desc">
          Recipes are formatted differently
          depending on the author and the intended use. Professional chefs
          record recipes in pocket notebooks, binders, or digital devices, using
          simple to complex details, depending on the type of recipe and the
          experience level of the chef. Information might include ingredients,
          prep steps, kitchen notes, and hand-drawn plate presentations. Recipes
          for the general consumer must be written with the assumption that the
          intended user knows very little about food preparation. When writing
          recipes that others will use in your kitchen, provide as much
          information as possible so that anyone who is preparing, inexperienced
          or skilled, can easily understand. Include information on ingredients,
          prep steps for fabricating or measuring, cooking instructions, recipe
          yield, and required equipment.{" "}
        </p>
        <NavLink to="/">
        <button type="button" className="bact-to-home-btn">Back to Home</button>
        </NavLink>
      </div>
    </div>
    </>
  );
};

export default About;
