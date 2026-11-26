import { DONATION_PRESET_AMOUNTS } from "../../utils/constants";
import { formatCurrency } from "../../utils/payment";

export default function DonationAmountSelector({
  selectedPreset,
  isCustom,
  customAmount,
  onSelectPreset,
  onSelectCustom,
  error,
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold text-navy-800">
        Select an amount
      </legend>

      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {DONATION_PRESET_AMOUNTS.map((amount) => {
          const isActive = !isCustom && selectedPreset === amount;
          return (
            <button
              key={amount}
              type="button"
              onClick={() => onSelectPreset(amount)}
              aria-pressed={isActive}
              className={`min-h-[52px] rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all sm:text-base ${
                isActive
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-navy-100 bg-white text-navy-700 hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              {formatCurrency(amount)}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onSelectCustom(customAmount)}
          aria-pressed={isCustom}
          className={`min-h-[52px] rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all sm:text-base ${
            isCustom
              ? "border-orange-500 bg-orange-50 text-orange-700"
              : "border-navy-100 bg-white text-navy-700 hover:border-orange-300 hover:bg-orange-50/50"
          }`}
        >
          Custom
        </button>
      </div>

      {isCustom && (
        <div className="mt-3">
          <label htmlFor="custom-amount" className="mb-1.5 block text-sm font-semibold text-navy-700">
            Enter custom amount (₹)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-400 font-semibold">
              ₹
            </span>
            <input
              id="custom-amount"
              type="text"
              inputMode="decimal"
              placeholder="e.g. 750"
              value={customAmount}
              onChange={(event) => onSelectCustom(event.target.value)}
              className="w-full min-h-[52px] rounded-xl border-2 border-navy-100 bg-white pl-8 pr-4 py-3 text-base font-semibold text-navy-900 outline-none transition-colors focus:border-orange-500"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "amount-error" : undefined}
            />
          </div>
        </div>
      )}

      {error && (
        <p id="amount-error" role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
