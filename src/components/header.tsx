import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { BiLogoFacebook, BiLogoGmail } from "react-icons/bi"
import { FaViber } from "react-icons/fa"
import { Menu } from "lucide-react"
export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex max-w-4xl items-center justify-between gap-4 p-4">
				<div className="flex items-center space-x-2">
					<img src="santienz.png" className="h-9" alt="Logo" />
					<span className="font-semibold text-base text-primary">
						Santienz Philippines Inc.
					</span>
				</div>
				<div className="xmd:flex hidden flex-1 items-center gap-4">
					<NavigationMenu className="mx-auto">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link to="/">Home</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										<li>
											<NavigationMenuLink asChild>
												<Link to="/">
													<div className="font-medium text-primary text-sm leading-none">
														Floorings
													</div>
													<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
														Lorem, ipsum dolor sit amet consectetur adipisicing
														elit. Quas dolor nobis eligendi.
													</p>
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link to="/">
													<div className="font-medium text-primary text-sm leading-none">
														Floorings
													</div>
													<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
														Lorem, ipsum dolor sit amet consectetur adipisicing
														elit. Quas dolor nobis eligendi.
													</p>
												</Link>
											</NavigationMenuLink>
										</li>{" "}
										<li>
											<NavigationMenuLink asChild>
												<Link to="/">
													<div className="font-medium text-primary text-sm leading-none">
														Floorings
													</div>
													<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
														Lorem, ipsum dolor sit amet consectetur adipisicing
														elit. Quas dolor nobis eligendi.
													</p>
												</Link>
											</NavigationMenuLink>
										</li>{" "}
										<li>
											<NavigationMenuLink asChild>
												<Link to="/">
													<div className="font-medium text-primary text-sm leading-none">
														Floorings
													</div>
													<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
														Lorem, ipsum dolor sit amet consectetur adipisicing
														elit. Quas dolor nobis eligendi.
													</p>
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link to="/">About Us</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link to="/">Careers</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<Button>Get Quote</Button>
				</div>
				<Sheet>
					<SheetTrigger className="xmd:hidden">
						<Menu />
					</SheetTrigger>
					<SheetContent className="gap-0">
						<SheetHeader>
							<SheetTitle>
								<div className="flex items-center space-x-2">
									<img src="santienz.png" className="h-9" alt="Logo" />
									<span className=" font-semibold text-primary">
										Santienz Philippines Inc.
									</span>
								</div>
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-4 border-t p-4">
							<Button asChild variant="secondary">
								<Link to="/">Home</Link>
							</Button>
							<Button asChild variant="secondary">
								<Link to="/">Services</Link>
							</Button>
							<Button asChild variant="secondary">
								<Link to="/">About Us</Link>
							</Button>
							<Button asChild variant="secondary">
								<Link to="/">Careers</Link>
							</Button>
						</div>
						<div className="mt-auto mb-0 flex flex-col justify-center gap-4 border-t p-4">
							<Button>Contact Us</Button>
							<div className="space-x-2">
								<BiLogoGmail className="inline size-8" />
								<span className="inline text-base">santienz@gmail.com</span>
							</div>
							<div className="space-x-2">
								<FaViber className="inline size-8" />
								<span className="inline text-base">+63 928 123 4567</span>
							</div>
							<div className="space-x-2">
								<BiLogoFacebook className="inline size-8" />
								<span className="inline text-base">@santienz.hr</span>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
