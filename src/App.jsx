import Toggle from './Toggle';
import withToggle from './withToggle';
import Tooltip from './Tooltip';
import withTooltip from './withTooltip';

const ToggleWithHOC = withToggle(Toggle);
const TooltipWithHOC = withTooltip(Tooltip);

const App = () => {
  return (
    <div>
      <h1>Toggle y Tooltip con HOC:</h1>
      <ToggleWithHOC>
        {(isVisible, toggleVisibility) => (
          <>
            <button onClick={toggleVisibility}>Toggle</button>
            {isVisible && <p>Este es el contenido que se muestra u oculta.</p>}
          </>
        )}
      </ToggleWithHOC>
      <TooltipWithHOC>
        {(isTooltipVisible, showTooltip, hideTooltip) => (
          <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            <button>Botón con Tooltip</button>
            {isTooltipVisible && <div>¡Este es un tooltip!</div>}
          </div>
        )}
      </TooltipWithHOC>

      <h1>Toggle y Tooltip con Render Props:</h1>
      <Toggle>
        {(isVisible, toggleVisibility) => (
          <>
            <button onClick={toggleVisibility}>Toggle</button>
            {isVisible && <p>Este es el contenido que se muestra u oculta.</p>}
          </>
        )}
      </Toggle>
      <Tooltip>
        {(isTooltipVisible) => (
          <div>
            <button>Botón con Tooltip</button>
            {isTooltipVisible && <div>¡Este es un tooltip!</div>}
          </div>
        )}
      </Tooltip>
    </div>
  );
};

export default App;