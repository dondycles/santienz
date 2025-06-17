// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Medal, Users } from "lucide-react"

export const Route = createFileRoute("/")({
	component: Home,
})

function Home() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<Header />
			<main className="flex-1 space-y-16 py-20">
				<section className="mx-auto max-w-4xl space-y-8 p-4 ">
					<div className="space-y-4 text-center">
						<h1 className="font-bold text-6xl text-primary">
							Lorem Ipsum Dolor
						</h1>
						<p className="text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							assumenda voluptates at!
						</p>
					</div>
					<div className="flex flex-1 justify-center gap-4">
						<Button variant="outline">Our Services</Button>
						<Button>Get Qoute</Button>
					</div>
				</section>
				<section className="mx-auto grid max-w-4xl grid-cols-2 gap-4 p-4 lg:grid-cols-4 ">
					<div className="flex flex-col items-center gap-4 rounded-lg bg-primary/10 px-4 py-8">
						<Badge className="rounded-full px-4 text-3xl">117+</Badge>
						<span className="text-center">Projects Completed</span>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-lg bg-primary/10 px-4 py-8">
						<Badge className="rounded-full px-4 text-3xl">60+</Badge>
						<span className="text-center">Satisfied Clients</span>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-lg bg-primary/10 px-4 py-8">
						<Badge className="rounded-full px-4 text-3xl">20+</Badge>
						<span className="text-center">Years Experience</span>
					</div>
					<div className="flex flex-col items-center gap-4 rounded-lg bg-primary/10 px-4 py-8">
						<Badge className="rounded-full px-4 text-3xl">50+</Badge>
						<span className="text-center">Team Members</span>
					</div>
				</section>
				<section className="space-y-16 bg-primary/10 py-16 ">
					<div className="mx-auto max-w-4xl space-y-4 px-4">
						<h2 className="text-center font-bold text-4xl text-primary">
							Featured Projects
						</h2>
						<p className="text-center text-muted-foreground">
							Take a look at some of our recent completed projects
						</p>
					</div>
					<div className="mx-auto grid max-w-4xl gap-8 px-4 ">
						<div className="overflow-hidden rounded-md bg-background">
							<img
								src="https://flooringsolutions.ph/wp-content/uploads/2019/03/What-is-Polyurethane.jpg"
								className="aspect-[3/1] w-full bg-primary object-cover"
								alt=""
							/>
							<div className="space-y-2 p-4">
								<p className="font-semibold text-2xl text-primary">
									Lorem Ipsum
								</p>
								<p className="text-muted-foreground">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dolorem fugiat earum similique.
								</p>
							</div>
						</div>
						<div className="overflow-hidden rounded-md bg-background">
							<img
								src="https://flooringsolutions.ph/wp-content/uploads/2019/03/Reasons-Why-You-Should-Implement-Polyurethane-Flooring-e1552630914227.jpg"
								className="aspect-[3/1] w-full bg-primary object-cover"
								alt=""
							/>
							<div className="space-y-2 p-4">
								<p className="font-semibold text-2xl text-primary">
									Lorem Ipsum
								</p>
								<p className="text-muted-foreground">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dolorem fugiat earum similique.
								</p>
							</div>
						</div>
						<div className="overflow-hidden rounded-md bg-background">
							<img
								src="https://flooringsolutions.ph/wp-content/uploads/2021/03/Why-Is-Polyurethane-Great-for-Flooring-1.jpg"
								className="aspect-[3/1] w-full bg-primary object-cover"
								alt=""
							/>
							<div className="space-y-2 p-4">
								<p className="font-semibold text-2xl text-primary">
									Lorem Ipsum
								</p>
								<p className="text-muted-foreground">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dolorem fugiat earum similique.
								</p>
							</div>
						</div>
						<div className="overflow-hidden rounded-md bg-background">
							<img
								src="https://flooringsolutions.ph/wp-content/uploads/2021/03/How-to-Apply-Diff-Polyurethane-Finishes.jpg"
								className="aspect-[3/1] w-full bg-primary object-cover"
								alt=""
							/>
							<div className="space-y-2 p-4">
								<p className="font-semibold text-2xl text-primary">
									Lorem Ipsum
								</p>
								<p className="text-muted-foreground">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dolorem fugiat earum similique.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="mx-auto max-w-4xl space-y-8 p-4">
					<div className="space-y-4">
						<h2 className="font-bold text-4xl text-primary">About Santienz</h2>
						<p className="text-muted-foreground">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
							perspiciatis omnis officia quibusdam odit veniam! Earum tempora
							quae aperiam enim nobis eius. Architecto iste deserunt eum non
							officiis a repellat.
						</p>
					</div>

					<div className="flex flex-wrap justify-evenly gap-4">
						<div className="flex items-center gap-4">
							<Medal className="inline size-9 text-primary" />
							<div className="inline">
								<p>Fully Certified</p>
								<p className="text-base text-muted-foreground">
									Fully Certified
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<Users className="inline size-9 text-primary" />
							<div className="inline">
								<p>Expert Team</p>
								<p className="text-base text-muted-foreground">
									Skilled professionals
								</p>
							</div>
						</div>
					</div>

					<img
						src="https://fellow.app/wp-content/uploads/2022/11/Team-Member-Strengths2.jpg"
						className="aspect-[3/1] w-full rounded-md object-cover"
						alt="basta"
					/>
				</section>
				<section className="mx-auto max-w-4xl space-y-8 border-t border-t-primary px-4 pt-16 pb-4">
					<div className="space-y-4">
						<h2 className="font-bold text-4xl text-primary">
							What Our Clients Say
						</h2>
						<p className="text-muted-foreground">
							hear from our satisfied customers
						</p>
					</div>

					<div className="flex flex-wrap justify-evenly gap-4">
						<div className="flex items-center gap-4">
							<Medal className="inline size-9 text-primary" />
							<div className="inline">
								<p>Fully Certified</p>
								<p className="text-base text-muted-foreground">
									Fully Certified
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<Users className="inline size-9 text-primary" />
							<div className="inline">
								<p>Expert Team</p>
								<p className="text-base text-muted-foreground">
									Skilled professionals
								</p>
							</div>
						</div>
					</div>
					<img
						src="https://fellow.app/wp-content/uploads/2022/11/Team-Member-Strengths2.jpg"
						className="aspect-[3/1] w-full rounded-md object-cover"
						alt=""
					/>
				</section>
			</main>
			<ThemeToggle />
		</div>
	)
}
