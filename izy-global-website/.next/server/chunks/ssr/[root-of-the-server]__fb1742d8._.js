module.exports = [
"[project]/izy-global-website/.next-internal/server/app/capabilities/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/izy-global-website/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/izy-global-website/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/izy-global-website/src/components/ui/Button.tsx [app-rsc] (ecmascript) <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/src/components/ui/Button.tsx [app-rsc] (ecmascript)");
}),
"[project]/izy-global-website/src/data/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Services Data
 * Static service information and capabilities
 */ __turbopack_context__.s([
    "CONTRACT_VEHICLES",
    ()=>CONTRACT_VEHICLES,
    "CORE_CAPABILITIES",
    ()=>CORE_CAPABILITIES,
    "SERVICES",
    ()=>SERVICES,
    "SERVICE_AREAS",
    ()=>SERVICE_AREAS
]);
const SERVICES = [
    {
        id: 'strategic-business-transformation',
        title: 'Strategic Business Transformation',
        description: 'Comprehensive business consulting services that drive organizational change, optimize processes, and deliver measurable results through strategic planning and implementation.',
        category: 'strategic',
        icon: 'strategy',
        features: [
            'Strategic Planning & Assessment',
            'Business Process Re-engineering',
            'Organizational Development',
            'Change Management',
            'Performance Optimization',
            'Digital Transformation Strategy'
        ],
        detailedDescription: 'Our strategic business transformation consulting leverages military precision and proven methodologies to help organizations achieve sustainable competitive advantages. We assess current state, design future state, and implement transformation initiatives that deliver measurable business outcomes.',
        benefits: [
            'Increased operational efficiency',
            'Enhanced competitive positioning',
            'Improved organizational agility',
            'Measurable ROI and business outcomes',
            'Sustainable transformation results'
        ]
    },
    {
        id: 'operational-excellence-consulting',
        title: 'Operational Excellence Consulting',
        description: 'Supply chain optimization and operational consulting services that streamline processes, reduce costs, and improve performance across your organization.',
        category: 'operational',
        icon: 'supply-chain',
        features: [
            'Supply Chain Optimization',
            'Process Improvement & Lean Implementation',
            'Inventory Management Strategy',
            'Distribution Network Design',
            'Performance Management Systems',
            'Cost Reduction Initiatives'
        ],
        detailedDescription: 'Our operational excellence consulting transforms how organizations manage their supply chains and operations. We provide end-to-end visibility, optimize processes, and implement performance management systems that drive continuous improvement and cost savings.',
        benefits: [
            'Reduced operational costs',
            'Improved process efficiency',
            'Enhanced customer satisfaction',
            'Streamlined operations',
            'Better inventory management'
        ]
    },
    {
        id: 'government-contracting-excellence',
        title: 'Government Contracting Excellence',
        description: 'Strategic consulting for government contracting success, leveraging SDVOSB certification and deep federal procurement expertise to optimize contract performance and compliance.',
        category: 'government',
        icon: 'government',
        features: [
            'Contract Strategy & Optimization',
            'Compliance & Risk Management',
            'Performance Management',
            'SDVOSB Partnership Strategies',
            'Federal Procurement Consulting',
            'Prime Contractor Collaboration'
        ],
        detailedDescription: 'Our government contracting excellence consulting combines SDVOSB certification with strategic business expertise to help organizations navigate federal procurement successfully. We optimize contract strategies, ensure compliance, and drive mission success through proven methodologies.',
        benefits: [
            'Enhanced contract performance',
            'Reduced compliance risks',
            'Strategic SDVOSB partnerships',
            'Improved win rates',
            'Mission-focused outcomes'
        ]
    },
    {
        id: 'technology-strategy-consulting',
        title: 'Technology Strategy & Digital Transformation',
        description: 'Strategic technology consulting that aligns IT capabilities with business objectives, driving digital transformation and competitive advantages through innovative solutions.',
        category: 'technology',
        icon: 'computer',
        features: [
            'Digital Transformation Strategy',
            'IT Infrastructure Consulting',
            'Cybersecurity Strategy & Risk Management',
            'Cloud Strategy & Implementation',
            'Enterprise Architecture Design',
            'Technology Integration & Consolidation',
            'IT Performance Optimization',
            'Business Process Automation'
        ],
        detailedDescription: 'Our technology strategy consulting transforms how organizations leverage technology for business success. We align IT capabilities with strategic objectives, implement secure and scalable solutions, and drive digital transformation that delivers measurable business value and competitive advantages.',
        benefits: [
            'Strategic technology alignment',
            'Enhanced cybersecurity posture',
            'Improved operational efficiency',
            'Scalable enterprise solutions',
            'Competitive technology advantages',
            'Reduced IT costs and complexity',
            'Business process optimization',
            'Future-ready digital infrastructure'
        ]
    }
];
const CORE_CAPABILITIES = [
    {
        id: 'strategic-business-consulting',
        title: 'Strategic Business Consulting',
        description: 'Comprehensive business transformation and strategic planning consulting services',
        services: [
            'strategic-business-transformation'
        ],
        naicsCodes: [
            '541611',
            '541618',
            '541690'
        ]
    },
    {
        id: 'operational-excellence',
        title: 'Operational Excellence Consulting',
        description: 'Supply chain optimization and operational improvement consulting',
        services: [
            'operational-excellence-consulting'
        ],
        naicsCodes: [
            '541614',
            '488510',
            '493110'
        ]
    },
    {
        id: 'government-contracting-consulting',
        title: 'Government Contracting Excellence',
        description: 'SDVOSB certified government contracting strategy and performance consulting',
        services: [
            'government-contracting-excellence'
        ],
        naicsCodes: [
            '561210',
            '541611',
            '488510'
        ]
    },
    {
        id: 'technology-strategy',
        title: 'Technology Strategy & Digital Transformation',
        description: 'Strategic technology consulting and digital transformation services',
        services: [
            'technology-strategy-consulting'
        ],
        naicsCodes: [
            '541511',
            '541512',
            '541513',
            '541519'
        ]
    }
];
const CONTRACT_VEHICLES = [
    {
        id: 'gsa-schedule',
        name: 'GSA Multiple Award Schedule',
        type: 'GSA',
        description: 'General Services Administration contract vehicle for government procurement',
        capabilities: [
            'Business Consulting Services',
            'Technology Strategy Consulting',
            'Operational Excellence'
        ]
    }
];
const SERVICE_AREAS = [
    'Houston, Texas',
    'Dallas-Fort Worth Metroplex',
    'Texas Statewide',
    'Nationwide Coverage'
];
}),
"[project]/izy-global-website/src/data/past-performance.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Past Performance Data
 * Company work experience and contract history
 */ __turbopack_context__.s([
    "CLIENT_TESTIMONIALS",
    ()=>CLIENT_TESTIMONIALS,
    "PAST_PERFORMANCE",
    ()=>PAST_PERFORMANCE,
    "PERFORMANCE_SUMMARY",
    ()=>PERFORMANCE_SUMMARY
]);
const PAST_PERFORMANCE = [
    {
        id: 'tvhs-courier-services',
        title: 'TVHS RMD Courier Services',
        client: 'Tennessee Valley Healthcare System (TVHS), Department of Veterans Affairs',
        clientType: 'federal',
        executionDate: 'July 2025',
        contractValue: '$1,294,591.53',
        periodOfPerformance: 'July 2025 – Present',
        description: 'Comprehensive courier services for medical facilities across multi-state region supporting critical healthcare operations.',
        scope: [
            'Daily and on-call courier services across medical facilities',
            'Same-day delivery of lab specimens and medical equipment',
            'Clinical documentation transport',
            '365-day coverage including holidays',
            'Two full-time drivers with specialized medical transport training'
        ],
        keyOutcomes: [
            'Maintained 99% on-time delivery rate',
            'Received zero compliance violations',
            'Successfully supported COVID-era transport needs',
            'Established reliable multi-state logistics network'
        ],
        category: 'services'
    },
    {
        id: 'civilian-water-trailers-1',
        title: 'Civilian Water Trailers',
        contractNumber: 'W911S2-22-P-0537 (W37HEH)',
        client: 'MICC End User',
        clientType: 'federal',
        executionDate: 'May 19, 2022',
        description: 'Supply and delivery of specialized civilian water trailers for military operations and emergency response capabilities.',
        scope: [
            'Procurement of high-capacity water trailers',
            'Quality assurance and compliance verification',
            'Timely delivery to specified military installation',
            'Technical documentation and training materials'
        ],
        contractingOfficer: {
            name: 'MICC Ft Drum, S2P2',
            organization: '925th CBN & MICC Fort Drum, NY',
            phone: '315-772-7272'
        },
        category: 'equipment'
    },
    {
        id: 'skid-loader-attachment',
        title: 'Skid Loader Tree Spade Attachment',
        contractNumber: 'W911S2-22-P-1515 (W90F2S)',
        client: 'MICC End User',
        clientType: 'federal',
        executionDate: 'September 2, 2022',
        description: 'Specialized tree spade attachment for skid loader equipment supporting landscaping and environmental operations.',
        scope: [
            'Custom tree spade attachment procurement',
            'Compatibility verification with existing equipment',
            'Installation guidance and technical support',
            'Warranty and maintenance documentation'
        ],
        category: 'equipment'
    },
    {
        id: 'civilian-water-trailers-2',
        title: 'Civilian Water Trailer',
        contractNumber: '36C24925P0596',
        client: 'Fort Jackson GPC',
        clientType: 'federal',
        executionDate: 'December 5, 2022',
        description: 'Additional water trailer procurement for Fort Jackson supporting training operations and emergency preparedness.',
        scope: [
            'Military-grade water trailer supply',
            'Compliance with federal specifications',
            'Delivery coordination with base operations',
            'Quality control and inspection services'
        ],
        category: 'equipment'
    },
    {
        id: 'tube-deburr-machine',
        title: 'Tube De-Burr Machine',
        contractNumber: 'W911S2-23-P-0164(W53W9L)',
        client: 'MICC End User',
        clientType: 'federal',
        executionDate: 'April 17, 2023',
        description: 'Precision tube de-burring equipment for manufacturing and maintenance operations requiring high-quality metal finishing.',
        scope: [
            'Industrial-grade de-burring machine procurement',
            'Technical specifications compliance',
            'Installation and setup coordination',
            'Operator training materials and documentation'
        ],
        category: 'equipment'
    },
    {
        id: 'lift-a-load-trailer',
        title: 'Lift-A-Load EPT4-716 Trailer',
        client: 'MICC End User',
        clientType: 'federal',
        executionDate: 'April 17, 2023',
        description: 'Heavy-duty equipment trailer for transporting specialized military equipment and vehicles.',
        scope: [
            'Heavy-duty trailer procurement and delivery',
            'Load capacity verification and testing',
            'Safety compliance and certification',
            'Maintenance schedule and parts availability'
        ],
        category: 'equipment'
    },
    {
        id: '500kw-generator',
        title: '500KW Generator',
        client: 'MICC End User',
        clientType: 'federal',
        executionDate: 'August 9, 2023',
        description: 'High-capacity power generation equipment for critical infrastructure and emergency backup power requirements.',
        scope: [
            'Industrial 500KW generator procurement',
            'Power output verification and testing',
            'Installation coordination and technical support',
            'Fuel system integration and safety protocols'
        ],
        category: 'equipment'
    },
    {
        id: 'txdot-frac-tank',
        title: 'TxDOT 500 BBL Frac Tank',
        client: 'Texas Department of Transportation',
        clientType: 'state',
        executionDate: 'October 16, 2023',
        description: 'Large-capacity frac tank for state transportation department operations and infrastructure projects.',
        scope: [
            '500-barrel frac tank supply and delivery',
            'State compliance and safety certifications',
            'Transportation and positioning services',
            'Environmental compliance documentation'
        ],
        category: 'equipment'
    }
];
const PERFORMANCE_SUMMARY = {
    totalContracts: PAST_PERFORMANCE.length,
    federalContracts: PAST_PERFORMANCE.filter((p)=>p.clientType === 'federal').length,
    stateContracts: PAST_PERFORMANCE.filter((p)=>p.clientType === 'state').length,
    privateContracts: PAST_PERFORMANCE.filter((p)=>p.clientType === 'private').length,
    totalValue: '$1,294,591.53+',
    categories: {
        equipment: PAST_PERFORMANCE.filter((p)=>p.category === 'equipment').length,
        services: PAST_PERFORMANCE.filter((p)=>p.category === 'services').length,
        logistics: PAST_PERFORMANCE.filter((p)=>p.category === 'logistics').length,
        transportation: PAST_PERFORMANCE.filter((p)=>p.category === 'transportation').length
    }
};
const CLIENT_TESTIMONIALS = [
    {
        client: 'Department of Veterans Affairs',
        quote: 'IZY Global Services has consistently delivered exceptional courier services with a 99% on-time delivery rate and zero compliance violations.',
        project: 'TVHS RMD Courier Services'
    }
];
}),
"[project]/izy-global-website/src/app/capabilities/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Capabilities Page
 * Clean overview of company capabilities, certifications, and past performance
 */ __turbopack_context__.s([
    "default",
    ()=>CapabilitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/izy-global-website/src/components/ui/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/izy-global-website/src/components/ui/Container.tsx [app-rsc] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/izy-global-website/src/components/ui/Button.tsx [app-rsc] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$PerformanceCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/src/components/ui/PerformanceCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/src/data/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/src/data/company.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$past$2d$performance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/izy-global-website/src/data/past-performance.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function CapabilitiesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-primary-900 py-12 md:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    className: "text-center text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-4 py-1.5 bg-accent-500 text-primary-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wide",
                            children: "Capabilities"
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4",
                            children: "Proven Capabilities for Mission Success"
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg text-neutral-200 max-w-2xl mx-auto mb-8",
                            children: "Strategic consulting solutions backed by military precision, SDVOSB certification, and unwavering commitment to excellence."
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "accent",
                                size: "lg",
                                children: "Request Capability Statement"
                            }, void 0, false, {
                                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8 md:mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3",
                                    children: "Core Capabilities"
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-600 max-w-2xl mx-auto",
                                    children: "Our comprehensive suite of consulting capabilities for strategic business transformation."
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CORE_CAPABILITIES"].map((capability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-primary-700 p-6 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: capability.title
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-neutral-200 text-sm",
                                                    children: capability.description
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-primary-900 mb-3",
                                                    children: "NAICS Codes"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 mb-6",
                                                    children: capability.naicsCodes?.map((code, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-sm",
                                                            children: code
                                                        }, index, false, {
                                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-primary-900 mb-3",
                                                    children: "Related Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: capability.services.map((serviceId, index)=>{
                                                        const service = __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICES"].find((s)=>s.id === serviceId);
                                                        return service ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-sm text-neutral-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 27
                                                                }, this),
                                                                service.title
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 25
                                                        }, this) : null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, capability.id, true, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 bg-neutral-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3",
                                    children: "Business Identifiers"
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-600 max-w-2xl mx-auto",
                                    children: "All the information you need for government contracting and procurement processes."
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6 max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 border border-neutral-200 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-primary-900 mb-2",
                                            children: "CAGE Code"
                                        }, void 0, false, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-primary-700 mb-1",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMPANY_INFO"].identifiers.cageCode
                                        }, void 0, false, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-500",
                                            children: "Commercial and Government Entity"
                                        }, void 0, false, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 border border-neutral-200 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-primary-900 mb-2",
                                            children: "UEI Number"
                                        }, void 0, false, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-primary-700 mb-1",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMPANY_INFO"].identifiers.uei
                                        }, void 0, false, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-500",
                                            children: "Unique Entity Identifier"
                                        }, void 0, false, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3",
                                    children: "Certifications & Compliance"
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-600 max-w-2xl mx-auto",
                                    children: "We maintain the highest standards of certification and compliance."
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$company$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CERTIFICATIONS"].map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-neutral-50 rounded-xl p-6 border border-neutral-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-primary-900",
                                                        children: cert.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block px-2 py-1 bg-accent-100 text-accent-800 rounded text-xs font-medium mt-1",
                                                        children: cert.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-neutral-600 text-sm mt-2",
                                                        children: cert.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this),
                                                    cert.verificationUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: cert.verificationUrl,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-primary-600 text-sm font-medium hover:text-primary-700 mt-2 inline-block",
                                                        children: "Verify →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 bg-neutral-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8 md:mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3",
                                    children: "Past Performance"
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-600 max-w-2xl mx-auto mb-6",
                                    children: "Proven track record delivering high-quality services to federal, state, and private-sector clients."
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg p-4 border border-neutral-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-primary-700",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$past$2d$performance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PERFORMANCE_SUMMARY"].totalContracts
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-neutral-600",
                                                    children: "Total Contracts"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg p-4 border border-neutral-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-primary-700",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$past$2d$performance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PERFORMANCE_SUMMARY"].federalContracts
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-neutral-600",
                                                    children: "Federal"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg p-4 border border-neutral-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-primary-700",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$past$2d$performance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PERFORMANCE_SUMMARY"].stateContracts
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-neutral-600",
                                                    children: "State"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg p-4 border border-neutral-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-accent-600",
                                                    children: "$1.3M+"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-neutral-600",
                                                    children: "Contract Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$data$2f$past$2d$performance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAST_PERFORMANCE"].map((performance)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$PerformanceCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PerformanceCard"], {
                                    performance: performance
                                }, performance.id, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 bg-primary-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    className: "text-center text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-heading font-bold mb-4",
                            children: "Ready to Partner With Us?"
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-200 mb-6 max-w-xl mx-auto",
                            children: "Download our complete capability statement or contact us to discuss how our SDVOSB expertise can benefit your organization."
                        }, void 0, false, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "accent",
                                        size: "lg",
                                        children: "Download Capability Statement"
                                    }, void 0, false, {
                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$izy$2d$global$2d$website$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "outline",
                                        size: "lg",
                                        className: "border-white text-white hover:bg-white hover:text-primary-900",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/izy-global-website/src/app/capabilities/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/izy-global-website/src/app/capabilities/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/izy-global-website/src/app/capabilities/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fb1742d8._.js.map