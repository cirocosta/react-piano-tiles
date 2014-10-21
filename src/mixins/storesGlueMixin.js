module.exports = (...stores) => {
  return {
    getInitialState () {
      if (!this.getStateFromStores)
        throw new Error('The component must have a `getStateFromStores` method.');

      return this.getStateFromStores();
    },

    handleStoresChanged () {
      if (this.isMounted())
        this.setState(this.getStateFromStores());
    },

    componentDidMount () {
      stores.forEach((store) => {
        store.addChangeListener(this.handleStoresChanged);
      });

      this.setState(this.getStateFromStores());
    },

    componentWillUnmount () {
      stores.forEach((store) => {
        store.removeChangeListener(this.handleStoresChanged);
      });
    }
  };
};
