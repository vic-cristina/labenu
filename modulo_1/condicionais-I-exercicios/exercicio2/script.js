const age = 27;
const hasHighSchool = true;
const isInCollege = false;

const personalStatus = (age, hasHighSchool, isInCollege) => {
  if (age >= 18) {
    console.log(`You're above 18, cheers 🍷`);
  } else {
    console.log(`Oh, you're still such a baby... 👶`);
  }
  if (hasHighSchool) {
    console.log(
      `Congrats on tackling all that math! (Or maybe you've just cheated, huh? 🤭)`
    );
  } else {
    console.log(
      `Oh, you haven't finished High School yet? Don't worry, take your time.`
    );
  }
  if (!isInCollege) {
    console.log(
      `Don't worry about not being in college, it's unnecessary for a programmer.`
    );
  } else {
    console.log(
      `Congrats on getting in college. I know it was hard, but believe me, it's a lot easier to get in than out of it.`
    );
  }
};

personalStatus(age, hasHighSchool, isInCollege);
