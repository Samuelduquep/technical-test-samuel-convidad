import { useState, useCallback } from "react";

interface FormData {
    emails: string;
    amount: string;
    url: string;
}

interface FormErrors {
    emails?: string;
    amount?: string;
    url?: string;
}

const useFormValidation = () => {
    const [formData, setFormData] = useState<FormData>({
        emails: "",
        amount: "",
        url: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validateEmails = (emails: string): boolean => {
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}(?:, ?[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7})*$/;
        return emailRegex.test(emails);
    };

    const validateAmount = (amount: string): boolean => {
        const amountRegex = /^€\s?\d+,\d{2}$/;
        return amountRegex.test(amount);
    };

    const validateUrl = (url: string): boolean => {
        // Regular Expression
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.]*)*(#[\w-]*)?$/;
        return urlRegex.test(url);
    };


    const validateForm = useCallback((): boolean => {
        const newErrors: FormErrors = {};

        if (!validateEmails(formData.emails)) {
            newErrors.emails = "Incorrect email/s. Please try again.";
        }

        if (!validateAmount(formData.amount)) {
            newErrors.amount = "This field only accept numbers with decimals and € symbol.";
        }

        if (!validateUrl(formData.url)) {
            newErrors.url = "Incorrect URL. Please try again.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }, [formData]);


    //TODO
    // useEffect(() => {
    //     validateForm();
    // }, [formData, validateForm]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

        const { id, value } = e.target;
        const updatedValue = id === "amount" ? formatAmount(value) : value;
        setFormData(prevState => ({ ...prevState, [id]: updatedValue }));
    };

    // Function Format Amount
    const formatAmount = (value: string): string => {
        // Remove all characters except digits and the comma
        const cleanedValue = value.replace(/[^\d,]/g, "");
        const formattedValue = `€${cleanedValue}`;
        return formattedValue;
    };


    return {
        formData,
        setFormData,
        handleChange,
        validateForm,
        errors
    };
};

export default useFormValidation;
