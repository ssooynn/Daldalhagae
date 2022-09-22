package com.ssafy.a302.response;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoSubscriptionHistory {
	private int subscribtionHistoryNo;
	private Date startDate;
	private Date endDate;
}
