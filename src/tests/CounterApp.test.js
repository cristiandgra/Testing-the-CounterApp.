const { shallow } = require("enzyme");
const { default: CounterApp } = require("../CounterApp");

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("debe de mostrar <CounterApp/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });
  test("incrementar con el boton de +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("1");
  });
  test("decremento con el boton de -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("-1");
  });
  test("debe colocar el valor por defecto con el btn reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("105");
  });
});
