import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Zadajte meno a priezvisko").max(120),
  contact: z.string().trim().min(3, "Zadajte e-mail alebo telefón").max(120),
  attending: z.enum(["yes", "no"]),
  count: z.coerce.number().min(1).max(20),
  guests: z.string().max(500).optional(),
  participation: z.enum(["obrad", "hostina", "oboje"]),
  diet: z.string().max(300).optional(),
  note: z.string().max(500).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const result = schema.safeParse(raw);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: connect to backend / Google Sheets / email
    console.log("RSVP", result.data);
    setSubmitted(true);
  };

  const fieldCls =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-burgundy/60 transition";
  const labelCls = "block text-sm font-medium text-foreground/85 mb-1.5";

  return (
    <section id="rsvp" className="py-20 sm:py-28 px-6 bg-secondary/40">
      <div className="max-w-2xl mx-auto">
        <SectionHeading eyebrow="Vaša odpoveď" title="Potvrdenie účasti" />

        <Reveal>
          <div className="bg-card rounded-2xl p-7 sm:p-10 shadow-elegant border border-border/60">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-2xl mb-2">Ďakujeme za odpoveď.</h3>
                <p className="text-muted-foreground">Tešíme sa na vás.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div>
                  <label className={labelCls} htmlFor="name">Meno a priezvisko</label>
                  <input id="name" name="name" className={fieldCls} required />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className={labelCls} htmlFor="contact">E-mail alebo telefón</label>
                  <input id="contact" name="contact" className={fieldCls} required />
                  {errors.contact && <p className="text-xs text-destructive mt-1">{errors.contact}</p>}
                </div>

                <div>
                  <span className={labelCls}>Potvrdzujem účasť</span>
                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <label className="flex-1 flex items-center gap-3 border border-border rounded-lg px-4 py-3 cursor-pointer has-[:checked]:border-burgundy has-[:checked]:bg-burgundy/5">
                      <input type="radio" name="attending" value="yes" defaultChecked className="accent-burgundy" />
                      <span>Áno, prídem</span>
                    </label>
                    <label className="flex-1 flex items-center gap-3 border border-border rounded-lg px-4 py-3 cursor-pointer has-[:checked]:border-burgundy has-[:checked]:bg-burgundy/5">
                      <input type="radio" name="attending" value="no" className="accent-burgundy" />
                      <span>Nie, nemôžem prísť</span>
                    </label>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls} htmlFor="count">Počet osôb</label>
                    <input id="count" name="count" type="number" min={1} max={20} defaultValue={1} className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="participation">Účasť na</label>
                    <select id="participation" name="participation" className={fieldCls} defaultValue="oboje">
                      <option value="obrad">Obrade</option>
                      <option value="hostina">Hostine</option>
                      <option value="oboje">Obrade aj hostine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls} htmlFor="guests">Mená ďalších hostí</label>
                  <input id="guests" name="guests" className={fieldCls} placeholder="Napríklad: Ján Novák, Mária Nováková" />
                </div>

                <div>
                  <label className={labelCls} htmlFor="diet">Stravovacie obmedzenia / alergie</label>
                  <input id="diet" name="diet" className={fieldCls} />
                </div>

                <div>
                  <label className={labelCls} htmlFor="note">Poznámka pre snúbencov</label>
                  <textarea id="note" name="note" rows={3} className={fieldCls} />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-burgundy text-primary-foreground rounded-full text-sm tracking-wider uppercase shadow-elegant hover:opacity-90 transition"
                >
                  <Mail className="w-4 h-4" /> Odoslať odpoveď
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
