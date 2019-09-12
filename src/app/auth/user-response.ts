export interface UserResponse {
    status: string,
    message: string,
    data: [
        {
            accessToken: {
                token: string,
                tokenType: string,
                createdDate: string,
                expiresOn: string
            },
            useraccount: {
                userid: string,
                accountexpirydate: string,
                contracttypeid: number,
                createtime: string,
                createuserid: string,
                datedisabled: string,
                dateexpired: string,
                datelocked: string,
                emailaddress: string,
                extension: string,
                facilitybranchid: number,
                facilityid: string,
                failedpasswordattemptcount: number,
                firstname: string,
                forcepasswordchange: string,
                gendergroupid: number,
                gradeid: number,
                isactive: boolean,
                isdisabled: boolean,
                isexpired: boolean,
                islocked: boolean,
                languageid: number,
                lastlogintime: string,
                lastname: string,
                lastpasswordchangedtime: string,
                othername: string,
                username: string,
                password: string,
                passwordanswer: string,
                passwordhint: string,
                passwordquestion: string,
                primarycellno: string,
                profileid: number,
                servertime: string,
                titleid: number,
                updatetime: string,
                updateuserid: string,
                usercategoryid: number,
                useridentitytype: number,
                userlevelid: number,
                usertypeid: number,
                userType: {
                    id: number,
                    name: string,
                    note: string,
                    isactive: boolean
                },
                profile: {
                    id: number,
                    isactive: boolean,
                    notes: string,
                    profilename: string,
                    permissions: [
                        {
                            id: number,
                            canadd: boolean,
                            candelete: boolean,
                            canedit: boolean,
                            canprint: boolean,
                            canview: boolean,
                            canviewlog: boolean,
                            service: boolean,
                            serviceauthitemid: string,
                            authorizationitem: {
                                id: string,
                                isactive: boolean,
                                name: string,
                                service: string
                            }
                        }
                    ]
                }
            }
        }
    ],
    level: string
}
