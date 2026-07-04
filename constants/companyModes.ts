import {
  Building2,
  ShoppingCart,
  Cpu,
  Cloud,
  Briefcase,
  Globe,
} from "lucide-react";

export const COMPANY_MODES = [
  {
    name: "Google",
    icon: Globe,
    color: "text-blue-400",
    description: "DSA + Problem Solving",
  },
  {
    name: "Amazon",
    icon: ShoppingCart,
    color: "text-orange-400",
    description: "Leadership + Coding",
  },
  {
    name: "Microsoft",
    icon: Building2,
    color: "text-cyan-400",
    description: "Coding + Design",
  },
  {
    name: "Adobe",
    icon: Cpu,
    color: "text-red-400",
    description: "Frontend + DSA",
  },
  {
    name: "Oracle",
    icon: Cloud,
    color: "text-green-400",
    description: "Java + SQL",
  },
  {
    name: "Generic",
    icon: Briefcase,
    color: "text-slate-300",
    description: "Balanced Interview",
  },
];