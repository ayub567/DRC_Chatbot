export const languageMap: IStringKeyMap = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  hi: 'हिन्दी',
  ar: 'العربية',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  ru: 'Русский',
  nl: 'Nederlands',
  sv: 'Svenska',
  fi: 'Suomi',
  no: 'Norsk',
  da: 'Dansk',
  pl: 'Polski',
  tr: 'Türkçe',
  el: 'Ελληνικά',
  he: 'עברית',
  hu: 'Magyar',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  uk: 'Українська',
  bg: 'Български',
  cs: 'Čeština',
  ro: 'Română',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  hr: 'Hrvatski',
  sr: 'Српски',
  bn: 'বাংলা',
  gu: 'ગુજરાતી',
  kn: 'ಕನ್ನಡ',
  mr: 'मराठी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  ur: 'اردو'
}

export const availableAPIs: IStringKeyMap = {
  official: 'official',
  azure: 'azure',
  palm: 'palm',
  gemini: 'gemini',
  ollama: 'ollama'
}

// official API 可用的模型
export const availableModels: IStringKeyMap = {
  'gpt-4o': 'gpt-4o',
  'gpt-3.5': 'gpt-3.5-turbo',
  'gpt-3.5-turbo-1106': 'gpt-3.5-turbo-1106',
  'gpt-3.5-16k': 'gpt-3.5-turbo-16k',
  'gpt-3.5-16k-0613': 'gpt-3.5-turbo-16k-0613',
  'text-davinci-003': 'text-davinci-003',
  gtp4: 'gpt-4',
  'gpt-4-turbo': 'gpt-4-turbo',
  'gpt-4-turo-preview': 'gpt-4-turo-preview',
  'gpt4-0613': 'gpt-4-0613',
  'gpt4-32k': 'gpt-4-32k',
  'gpt4-32k-0613': 'gpt-4-32k-0613'
}

// palm api 可用的模型
export const availableModelsForPalm: IStringKeyMap = {
  'text-bison-001': 'text-bison-001'
}

// Gemini API 可用的模型
export const availableModelsForGemini: IStringKeyMap = {
  'gemini-pro': 'gemini-pro',
  'gemini-1.5-flash': 'gemini-1.5-flash',
  'gemini-1.5-pro': 'gemini-1.5-pro-latest'
}

// Ollama API 可用的模型
export const availableModelsForOllama: IStringKeyMap = {
  llama3: 'llama3',
  llama2: 'llama2',
  phi3: 'phi3',
  wizardlm2: 'wizardlm2',
  mistral: 'mistral',
  'llama2-uncensored': 'llama2-uncensored',
  'llama2:13b': 'llama2:13b',
  'llama2:70b': 'llama2:70b',
  'gemma:2b': 'gemma:2b',
  'gemma:7b': 'gemma:7b',
  qwen: 'qwen',
  codegemma: 'codegemma',
  'command-r': 'command-r',
  'command-r-plus': 'command-r-plus',
  llava: 'llava',
  codellama: 'codellama',
  yi: 'yi',
  codeqwen: 'codeqwen',
  'dolphin-phi': 'dolphin-phi',
  phi: 'phi',
  'neural-chat': 'neural-chat',
  'starlinh-lm': 'starlinh-lm',
  'orca-mini': 'orca-mini',
  vicuna: 'vicuna'
}

export const buildInPrompt = {
  translate: {
    system: (language: string) =>
      `Act as an ${language} translator, spelling corrector and improver.`,
    user: (
      text: string,
      language: string
    ) => `I will speak to you in any language and you will detect the language,
    translate it and answer in the corrected and improved version of my text, in ${language}.
    I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, 
    upper level ${language} words and sentences.
    Keep the meaning same, but make them more literary.
    I want you to only reply the correction, the improvements and nothing else, do not write explanations.
    Reply in ${language}.
    My first sentence is: ${text}`
  },
  // polish: {
  //   system: (language: string) =>
  //     `As a writing improvement assistant, Reply in ${language}`,
  //   user: (
  //     text: string,
  //     language: string
  //   ) => `Improve the spelling, grammar, clarity, concision,
  //   and overall readability of the text provided, while breaking down long sentences, reducing repetition,
  //   and providing suggestions for improvement.
  //   Please provide only the corrected ${language} version of the text and avoid including explanations.
  //   Please begin by editing the following text: ${text}`
  // },
  // academic: {
  //   system: (language: string) =>
  //     `As an academic paper writing assistant, Reply in ${language}`,
  //   user: (
  //     text: string,
  //     language: string
  //   ) => `I want you to act as a professional spelling and grammar corrector and improver.
  //   I want you to replace my simplified A0-level words and sentences with more beautiful and elegant,
  //   upper level ${language} words and sentences.
  //   Keep the meaning same, but make them more literary and improve my expression in the style of SCI papers.
  //   High IF SCI papers are preferred.
  //   Please begin by editing the following text: ${text}`
  // },
  // summary: {
  //   system: (language: string) =>
  //     `As a summarization assistant, Reply in ${language}`,
  //   user: (
  //     text: string,
  //     language: string
  //   ) => `Summarize the following text into 100 words,
  //   making it easy to read and comprehend. The summary should be concise, clear,
  //   and capture the main points of the text. Avoid using complex sentence structures or technical jargon.
  //   Respond in ${language}. Please begin by editing the following text: ${text}`
  // },
  review: {
    system: (language: string) =>
      `As an academic check and evaluate research protocol, Reply in ${language}`,
    user: (
      text: string,
      language: string
    ) => `I want you to act as a check and evaluate professional research protocol, give answer and explanation.
Title Alignment:
Is title missing?
If “No” than, otherwise label “missing”
Does the title accurately reflect the content and scope of the research?
Does the title contain study population, exposure, outcome and study design?
Research Questions:
Is the research question missing?
If “No” then, otherwise label “missing”
Are the research questions clearly articulated and logically derived from the study's purpose or problem statement?
Appraise research question based on FINER criteria (Feasible, innovative, Novel, ethical and relevant)
Does research question base on PICO criteria (population, intervention or exposure, control or unexposed and outcome)
Objectives:
Is the objective missing?
If “ No” then, otherwise label “missing”
Do the objectives of the study directly align with the research questions and overarching goal of the research?
Are the research questions specific, measurable, achievable, relevant, and time-bound (SMART)?
Hypothesis (if applicable):
Is hypothesis missing or not applicable?
If “No” than, otherwise label “missing”
If hypotheses are proposed, are they clearly stated and testable based on the research questions?
Do the hypotheses make estimates about the relationship between variables or expected outcomes?
Alignment and Coherence:
Is there consistency and coherence between the title, research questions, objectives, and, if applicable, hypotheses?
Please check what is inconsistent between the title, research questions, objectives, and, if applicable, hypotheses?
Rationale:
Does the protocol provide a clear and compelling rationale for why the study is needed?
Has the protocol identified gaps or limitations in existing literature or knowledge that the study aims to address?
Are the significance and potential implications of the study's findings clearly articulated?
Alignment with Rationale:
Do the research questions and objectives directly align with the stated rationale for the study?
Are the objectives designed to address the specific gaps or questions identified in the rationale?
Does the study design and methodology align with the goals and objectives derived from the rationale?
Study Design:
Does the protocol clearly outline the research design (e.g., experimental, observational, qualitative, quantitative)?
Is the chosen design appropriate for addressing the research questions or objectives?
Are there any potential biases or confounding variables that should be addressed?
Sampling Strategy:
Is the sampling strategy clearly defined and appropriate for the research aims?
Are the sample size and sampling technique justified?
Are there any potential limitations or biases associated with the sampling strategy?
Data Collection Methods:
Are the data collection methods clearly described and appropriate for the research design?
Are there any potential sources of error or bias in the data collection process?
Are the instruments or tools used for data collection validated and reliable?
Data Analysis Plan:
Is the data analysis plan clearly outlined and appropriate for the research questions?
Are the statistical methods or analytical techniques justified and suitable for the data?
Are there any potential limitations or assumptions associated with the proposed analysis?
Validity and Reliability:
Has the protocol addressed the validity and reliability of the research findings?
Are there any potential threats to internal or external validity that should be considered?
Have steps been taken to enhance the reliability of the study findings?
Exposure Variable:
Is the exposure variable clearly defined and described in the protocol?
Are the methods for measuring or assessing the exposure variable specified?
Is there justification for the choice of the exposure variable based on existing literature or theoretical rationale?
Outcome Variable:
Is the outcome variable clearly defined and operationalized in the protocol?
Are the methods for measuring or assessing the outcome variable specified?
Is there justification for the choice of the outcome variable based on its relevance to the research question or objectives?
Confounders:
Have potential confounding variables been identified and addressed in the study design?
Are methods proposed to control for confounding variables, such as matching, stratification, or statistical adjustment?
Have efforts been made to measure or assess confounders accurately to minimize bias?
Effect Modifiers:
Have potential effect modifiers been considered in the study design?
Is there justification for why certain variables may modify the relationship between the exposure and outcome?
Are there plans to explore interactions between the exposure variable and potential effect modifiers?
Independent Variables:
Are there additional independent variables of interest beyond the exposure variable?
Have these independent variables been clearly defined and justified in the context of the research question or objectives?
Are there plans to explore relationships between independent variables and the outcome, either as primary analyses or secondary explorations?
Sample Size Calculation:
Has the protocol provided a rationale for the chosen sample size?
Are the parameters used in the sample size calculation clearly defined (e.g., effect size, significance level, power)?
Are the assumptions underlying the sample size calculation justified based on previous research or pilot data?
Statistical Methods for Sample Size Calculation:
What statistical methods were used for calculating the sample size?
Are the chosen statistical methods appropriate for the study design and outcome variables?
Has the protocol considered potential sources of variability or uncertainty in the sample size calculation?
Power Analysis:
Has the protocol conducted a power analysis to determine the likelihood of detecting a true effect if it exists?
Is the chosen level of statistical power sufficient to detect meaningful differences or associations?
Have sensitivity analyses been conducted to assess the impact of varying assumptions on statistical power?
Setting:
Is the setting for data collection clearly described and appropriate for the research aims?
Have potential advantages or limitations of the chosen setting been considered?
Are there any special considerations for accessing or conducting research in the chosen setting (e.g., institutional requirements, community engagement)?
Sampling Frame and Population:
Has the protocol defined the sampling frame and target population for the study?
Are inclusion and exclusion criteria for participant selection clearly specified?
Are there any potential biases or limitations associated with the sampling frame or population that need to be addressed?
Sampling Method:
What sampling method will be used to select participants?
Is the chosen sampling method appropriate for the study design and research objectives?
Have steps been taken to minimize biases or enhance the representativeness of the sample? 
Definition of Study Population:
How is the study population defined in the protocol?
Are there specific inclusion and exclusion criteria delineated for participant eligibility?
Is the rationale for selecting this particular study population clearly justified?
Characteristics of the Study Population:
What demographic characteristics are used to describe the study population (e.g., age, gender, ethnicity, socioeconomic status)?
Are there any specific health or clinical characteristics relevant to the research question?
Is there diversity within the study population to ensure representation and generalizability of findings?
Target Sample Size vs. Study Population Size:
How does the anticipated sample size compare to the size of the overall study population?
Are there plans to recruit the entire study population or only a subset?
If only a subset will be recruited, what strategies will be used to ensure representativeness and generalizability?
Source of Study Population:
Where will the study population be recruited or identified from (e.g., hospitals, community centers, online platforms)?
Are there any potential biases or limitations associated with the source of the study population?
How will participants be approached and recruited to ensure voluntary participation and informed consent?
Relevance of Study Population to Research Question:
Is the study population directly relevant to the research question or objectives?
Are there any subgroups within the study population that will be analyzed separately based on their characteristics or exposures?
Have efforts been made to ensure that the study population reflects the target audience or population of interest for the research?
    Respond in ${language}. Please begin by editing the following text: ${text}`
  },
  grammar: {
    system: (language: string) =>
      `Act like you are an expert grammar checker. Look for mistakes and make sentences more fluent, Reply in ${language}`,
    user: (
      text: string,
      language: string
    ) => `Please analyze the following text for a wide range of grammatical aspects and provide corrections. Be thorough in identifying and fixing any grammatical mistakes, including checking for correct punctuation usage, ensuring proper sentence structure, enhancing readability, identifying and correcting spelling mistakes, and verifying subject-verb agreement. Your assistance in ensuring the grammatical accuracy of the text is highly appreciated. Please be thorough in your examination, and provide comprehensive corrections to enhance the overall grammatical integrity of the text.

    Just reply to user input with the correct grammar, DO NOT reply to the context of the question of the user input. If the user input is grammatically correct and fluent, just reply “sounds good”.
    Respond in ${language}. Please begin by editing the following text: ${text}`
  }
}
