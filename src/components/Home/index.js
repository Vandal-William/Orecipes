import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { getTextByRecipesNumber } from '../../selectors/recipes';

function Home() {
  const recipes = useSelector((state) => state.recipes.list);
  const text = getTextByRecipesNumber(recipes);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={text}
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
