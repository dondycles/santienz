// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Copyright, Medal, Star, UserCircle, Users } from "lucide-react"
import { CountingNumber } from "@/components/animate-ui/text/counting-number"

const features = [
	{ count: 100, title: "Projects Completed" },
	{ count: 60, title: "Satisfied Clients" },
	{ count: 20, title: "Years of Experience" },
	{ count: 50, title: "Team Members" },
]

const projects = [
	{
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat earum similique.",
		img: "https://flooringsolutions.ph/wp-content/uploads/2019/03/Reasons-Why-You-Should-Implement-Polyurethane-Flooring-e1552630914227.jpg",
	},
	{
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat earum similique.",
		img: "https://flooringsolutions.ph/wp-content/uploads/2021/03/Why-Is-Polyurethane-Great-for-Flooring-1.jpg",
	},
	{
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat earum similique.",
		img: "https://flooringsolutions.ph/wp-content/uploads/2021/03/How-to-Apply-Diff-Polyurethane-Finishes.jpg",
	},
	{
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat earum similique.",
		img: "https://flooringsolutions.ph/wp-content/uploads/2019/03/What-is-Polyurethane.jpg",
	},
]

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
						<Button>Get Quote</Button>
					</div>
				</section>
				<section className="mx-auto grid max-w-4xl grid-cols-2 gap-4 p-4 lg:grid-cols-4 ">
					{features.map(feature => (
						<div
							key={feature.title}
							className="flex flex-col items-center gap-4 rounded-lg bg-primary/10 px-4 py-8"
						>
							<Badge className="rounded-full px-4 text-2xl">
								<CountingNumber number={feature.count} />+
							</Badge>
							<span className="text-center text-muted-foreground">
								{feature.title}
							</span>
						</div>
					))}
				</section>
				<section className="space-y-16 bg-primary/10 xmd:py-16 pt-16">
					<div className="mx-auto max-w-4xl space-y-4 px-4">
						<h2 className="text-center font-bold text-4xl text-primary">
							Featured Projects
						</h2>
						<p className="text-center text-muted-foreground">
							Take a look at some of our recent completed projects
						</p>
					</div>
					<div className="mx-auto grid max-w-4xl xmd:gap-8 xmd:px-4 ">
						{projects.map(project => (
							<div
								key={project.img}
								className="overflow-hidden xmd:rounded-md bg-background"
							>
								<img
									src={project.img}
									className="aspect-[2/1] w-full bg-primary object-cover"
									alt={project.title}
								/>
								<div className="space-y-2 p-4">
									<p className="font-semibold text-2xl text-primary">
										{project.title}
									</p>
									<p className="text-muted-foreground">{project.description}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="mx-auto max-w-4xl space-y-8 not-xmd:border-t border-t-primary p-4 not-xmd:pt-16">
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
				<section className=" space-y-8 border-t border-t-primary px-4 pt-16 pb-4">
					<div className="mx-auto max-w-4xl space-y-4">
						<h2 className="font-bold text-4xl text-primary">
							What Our Clients Say
						</h2>
						<p className="text-muted-foreground">
							Hear from our satisfied customers
						</p>
					</div>
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={`${i + 1}`} className="mx-auto max-w-4xl space-y-4">
							<div className="space-y-4 rounded-md border border-primary p-4">
								<div className="space-x-2">
									<UserCircle className="float-start inline size-9" />
									<div className="inline-block">
										<p className="inline font-semibold text-2xl leading-none">
											Lorem, ipsum.
										</p>
										<p className="text-base text-muted-foreground">01/23/45</p>
									</div>
								</div>
								<p className="text-muted-foreground">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Laboriosam enim modi dolorem expedita?
								</p>
								<div className="flex gap-1">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star
											key={`${i + 1}`}
											className="fill-primary/25 stroke-primary"
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</section>
			</main>
			<footer className="space-y-8 bg-primary/10 pt-8">
				<div className="mx-auto grid max-w-4xl gap-x-4 gap-y-8 px-4 md:grid-cols-4 ">
					<div className="space-y-4">
						<img src="santienz.png" alt="Santienz" className="inline w-24" />
						<p className=" text-base text-muted-foreground">
							Santienz Philippines Inc.
						</p>
					</div>
					<div className="space-y-4">
						<h4>Navigation</h4>
						<ul className="space-y-2 text-base text-muted-foreground">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Services</a>
							</li>
							<li>
								<a href="/">About Us</a>
							</li>
							<li>
								<a href="/">Careers</a>
							</li>
							<li>
								<a href="/">Testimonials</a>
							</li>
							<li>
								<a href="/">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4>Services</h4>
						<ul className="space-y-2 text-base text-muted-foreground">
							<li>
								<a href="/">PU</a>
							</li>
							<li>
								<a href="/">Floors</a>
							</li>
							<li>
								<a href="/">Walls</a>
							</li>
							<li>
								<a href="/">Tiles</a>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4>Contact</h4>
						<ul className="space-y-2 text-base text-muted-foreground">
							<li>0928 123 3456</li>
							<li>example@gmail.com</li>
							<li>123 St., Brgy Four, Five City 1170</li>
							<li>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6519226290716!2d121.08610509999998!3d14.561886800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7d0d940b8ab%3A0x1914a2886e799f11!2sSantienz%20Philippines%20Incorporated!5e0!3m2!1sen!2sph!4v1750235424619!5m2!1sen!2sph"
									height="225"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Santienz Philippines Incorporated Location Map"
									className="w-full rounded-xl outline"
								/>
							</li>
						</ul>
					</div>
				</div>
				<div className="bg-primary py-8 text-center text-primary-foreground">
					<Copyright className="inline size-9" />
					<span> 2025 Santienz Philippines Inc.</span>
				</div>
			</footer>
		</div>
	)
}
