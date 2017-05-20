function ClassViewModel(){
  const self = this;
  this.input = ko.observable("");
  this.packages = ko.observableArray([]);
  this.result = ko.observable("");
  this.errors = ko.observableArray([])
  this.link = ko.observable("");

  this.Enter = (d, e) => {
    if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)){
      Adding();
      return false;
    }
    return true;
  }
}
const viewModel = new ClassViewModel();
ko.applyBindings(viewModel);
