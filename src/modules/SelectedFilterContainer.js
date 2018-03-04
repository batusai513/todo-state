import { Container } from 'unstated';

export default class SelectedFilterContainer extends Container {
  state = {
    selectedFilter: 'all',
  };

  changeSelectedFilter = selectedFilter => {
    this.setState({ selectedFilter });
  };
}
