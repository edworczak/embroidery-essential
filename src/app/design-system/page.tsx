import ProjectsList from "@/app/ui/projects-list/projects-list";
import ThreadsList from "@/app/ui/threads-list/threads-list";
import TapeLabel from "@/app/ui/common/tape-label";

export default function DesignSystem() {
    const projects = [
        {
            id: "prj-test-1",
            name: "Haft na podstawie zdjęcia maskonurów",
            startDate: new Date("2024-04-10"),
            img: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            hoop: "12",
            fabric: "surowa bawełna",
            budget: {
                price: 120,
                costs: [
                    { id: "cost1", label: "tamborek", cost: 24 },
                    { id: "cost2", label: "muliny", cost: 8 },
                    { id: "cost3", label: "materiał", cost: 4 },
                ],
            },
            threads: [
                { id: "dmc310", description: "czarne pióra" },
                { id: "dmcb5200", description: "białe pióra" },
                { id: "dmc606", description: "dziób i płetwy" },
                { id: "dmc739", description: "paski na dziobie" },
                { id: "dmc839", description: "krajobraz" },
                {
                    id: "dmc02",
                    description: "podświetlenia na białych piórach",
                },
                { id: "dmc906", description: "trawa" },
                { id: "dmc164", description: "łodygi długich kwiatów" },
                { id: "dmc741", description: "niskie kwiaty" },
                { id: "dmc963", description: "wysokie kwiaty" },
            ],
        },
        {
            id: "prj-test-2",
            name: "Kwiatowy haft",
            startDate: new Date("2024-01-31"),
            time: "0:00",
            hoop: "12",
        },
        {
            id: "prj-test-3",
            name: "Ukończony haft",
            startDate: new Date("2024-01-31"),
            time: "0:00",
            hoop: "12",
            finished: true,
            finishDate: new Date("2024-07-23"),
        },
    ];

    const threads = [
        {
            id: "dmc3713",
            brand: "DMC",
            name: "3713",
            order: 0,
            rgb: "#f3cecd",
            substitutes: {
                ariadna: ["1543"],
                anchor: ["01020"],
            },
        },
        {
            id: "dmc761",
            brand: "DMC",
            name: "761",
            order: 1,
            rgb: "#eab8b9",
            substitutes: {
                ariadna: ["1564"],
                anchor: ["01021"],
            },
        },
        {
            id: "dmc760",
            brand: "DMC",
            name: "760",
            order: 2,
            rgb: "#d28c8e",
            substitutes: {
                ariadna: ["1755"],
                anchor: ["01022"],
            },
        },
        {
            id: "dmc3712",
            brand: "DMC",
            name: "3712",
            order: 3,
            rgb: "#bd6868",
            substitutes: {
                ariadna: ["1539"],
                anchor: ["01023"],
            },
        },
        {
            id: "dmc3328",
            brand: "DMC",
            name: "3328",
            order: 4,
            rgb: "#a74a4a",
            substitutes: {
                ariadna: ["1760"],
                anchor: ["01024"],
            },
        },
    ];

    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <section>
                <h1>design system</h1>
            </section>
            <section>
                <div className="dynamic-grid-3-cols">
                    <div className="card p-4 align-vertically">
                        <h1>embroidery essential</h1>
                        <TapeLabel
                            label="Heading 1"
                            cssClasses="-top-2 -left-2"
                        />
                    </div>
                    <div className="card p-4 align-vertically">
                        <h2>embroidery essential</h2>
                        <TapeLabel
                            label="Heading 2"
                            cssClasses="-top-2 -left-2"
                        />
                    </div>
                    <div className="card p-4 align-vertically">
                        <TapeLabel
                            label="Heading 3"
                            cssClasses="-top-2 -left-2"
                        />
                        <h3>embroidery essential</h3>
                    </div>
                    <div className="card p-4 row-span-2 align-vertically">
                        <TapeLabel
                            label="Body text"
                            cssClasses="-top-2 -left-2"
                        />
                        <p>
                            Paragraph text. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aliquam aperiam atque
                            blanditiis delectus dolore, dolorum earum eligendi
                            ipsa ipsum nostrum officiis quis quos reiciendis
                            repellat sit tenetur, veritatis. Eius, veniam?
                        </p>
                    </div>
                    <div className="card p-4 align-vertically">
                        <TapeLabel
                            label="Buttons"
                            cssClasses="-top-2 -left-2"
                        />
                        <div>
                            <button className="button-primary">
                                embroidery essential
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>threads list</h2>
                <ThreadsList threads={threads} />
            </section>
            <section>
                <h2>projects list</h2>
                <ProjectsList projects={projects} />
            </section>
        </div>
    );
}
