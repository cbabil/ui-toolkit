import { ReactNode } from 'react';

export type Step = {
  label: string;
  description?: string;
  status?: 'complete' | 'current' | 'upcoming';
};

export type StepperProps = {
  steps: Step[];
  currentIndex?: number;
  size?: 'default' | 'compact';
};

export function Stepper({ steps, currentIndex = 0, size = 'default' }: StepperProps) {
  return (
    <ol className={["ui-stepper", size === 'compact' ? 'ui-stepper--compact' : ''].join(' ')} role="list">
      {steps.map((step, idx) => {
        const status = step.status || (idx < currentIndex ? 'complete' : idx === currentIndex ? 'current' : 'upcoming');
        return (
          <li key={step.label} className={["ui-stepper__step", `is-${status}`].join(' ')} role="listitem">
            <span className="ui-stepper__dot" aria-hidden>
              {idx + 1}
            </span>
            <div className="ui-stepper__text">
              <div className="ui-stepper__label">{step.label}</div>
              {step.description && size !== 'compact' ? <div className="ui-stepper__desc">{step.description}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
